import { useState, useRef, useEffect } from 'react';
import countryList from '../../../utils/CountryList.json';
import './CountryAutoComplete.scss'

// ── Tipe data dari JSON ────────────────────────────── //
type Country = {
	name: string;
	dialCode: string;
	code: string;
};
const countries = countryList as Country[];

// ── Props komponen ─────────────────────────────────── //
type Props = {
	value: string; // string yang tersimpan di form
	onChange: (val: string) => void;
};

export default function CountryAutoComplete({ value, onChange }: Props) {
	const [query, setQuery] = useState(value);
	const [open, setOpen] = useState(false);
	const wrapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const clickOutside = (e: MouseEvent) => {
			if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener('mousedown', clickOutside);
		return () => document.removeEventListener('mousedown', clickOutside);
	}, []);

	const filtered = countries
		.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
		.slice(0, 8);

	return (
		<div ref={wrapRef} className='country-autocomplete'>
			<input
				type='text'
				placeholder='Search country'
				value={query}
				onFocus={() => setOpen(true)}
				onChange={(e) => {
					setQuery(e.target.value);
					setOpen(true);
					onChange('');
				}}
			/>

			{open && filtered.length > 0 && (
				<div className='country-autocomplete__dropdown'>
					{filtered.map((c) => (
						<div
							key={c.code}
							className='country-autocomplete__option'
							onMouseDown={() => {
								setQuery(c.name);
								onChange(c.name);
								setOpen(false);
							}}
						>
							{c.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
