import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import styles from './AirportInput.module.scss';

type Airport = {
  airport_name: string;
  city: string;
  country: string;
  iata_code: string;
};

type Props = {
  label: string;
  placeholder: string;
  onSelect: (airport: Airport) => void;
};

const AirportInput = ({ label, placeholder, onSelect }: Props) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Airport[]>([]);
  const [allAirports, setAllAirports] = useState<Airport[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetch('/data/airports.dat')
      .then((res) => res.text())
      .then((csv) => {
        Papa.parse<string[]>(csv, {
          complete: (result) => {
            const parsedAirports = result.data
              .map((row) => {
                if (row.length < 5) return null;
                return {
                  airport_name: row[1]?.replace(/"/g, ''),
                  city: row[2]?.replace(/"/g, ''),
                  country: row[3]?.replace(/"/g, ''),
                  iata_code: row[4]?.replace(/"/g, ''),
                };
              })
              .filter(
                (a) => a && a.iata_code && a.iata_code.length === 3 && a.city
              ) as Airport[];

            setAllAirports(parsedAirports);
          },
          delimiter: ',',
          header: false,
          skipEmptyLines: true,
        });
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 1) {
      const filtered = allAirports.filter((a) =>
        `${a.city} ${a.iata_code} ${a.airport_name}`
          .toLowerCase()
          .includes(value.toLowerCase())
      );
      setResults(filtered.slice(0, 10));
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleSelect = (airport: Airport) => {
    setQuery(`${airport.city} (${airport.iata_code})`);
    onSelect(airport);
    setShowDropdown(false);
  };

  return (
    <div className={styles.hero__field}>
      <span>{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
        onFocus={() => results.length > 0 && setShowDropdown(true)}
        className={styles.hero__field__input}
      />
      {showDropdown && (
        <ul className={styles.hero__autocomplete}>
          {results.map((airport) => (
            <li
              key={airport.iata_code + airport.city}
              onClick={() => handleSelect(airport)}
              className={styles.hero__autocomplete__item}
            >
              {airport.city} ({airport.iata_code}) – {airport.airport_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AirportInput;
