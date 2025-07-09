import { useEffect, useState } from 'react';
import {
	collection,
	onSnapshot,
	query,
	orderBy,
	Timestamp,
	// doc,
  // deleteDoc,
} from 'firebase/firestore';
import { db } from '../../../firebase.config';
import './SignupsNewsletter.scss';

type NewsletterEntry = {
	id: string;
	name: string;
	email: string;
	country: string;
	feedback: boolean;
	createdAt: Timestamp;
};

const NewsletterAdmin = () => {
	const [entries, setEntries] = useState<NewsletterEntry[]>([]);

	const formatDateTime = (date: Date) => {
		const pad = (n: number) => n.toString().padStart(2, '0');
		const d = pad(date.getDate());
		const m = pad(date.getMonth() + 1);
		const y = date.getFullYear();
		const hh = pad(date.getHours());
		const mm = pad(date.getMinutes());
		const ss = pad(date.getSeconds());
		return `${d}/${m}/${y} ${hh}:${mm}:${ss}`;
	};

	const formatFileName = (ext: 'csv' | 'json') => {
		const stamp = formatDateTime(new Date());
		const safeStamp = stamp.replace(/[/:]/g, '_');
		return `All Signup Newsletter Data ${safeStamp}.${ext}`;
	};

	const entriesToCSV = (data: NewsletterEntry[]) => {
		const header = [
			'No',
			'Name',
			'Country',
			'Email',
			'Feedback',
			'Signed Up At',
		];

		const rows = data.map((e, i) => [
			i + 1,
			e.name,
			e.country,
			e.email,
			e.feedback ? 'Yes' : 'No',
			formatDateTime(e.createdAt.toDate()),
		]);

		const csvLine = (row: (string | number)[]) =>
			row.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',');
		return [csvLine(header), ...rows.map(csvLine)].join('\n');
	};

	const downloadString = (
		filename: string,
		mimeType: string,
		content: string
	) => {
		const blob = new Blob([content], { type: mimeType });
		const url = URL.createObjectURL(blob);
		const link = Object.assign(document.createElement('a'), {
			href: url,
			download: filename,
		});
		link.click();
		URL.revokeObjectURL(url);
	};

	const handleDownloadCSV = () => {
		if (!entries.length) return;
		downloadString(
			formatFileName('csv'),
			'text/csv;charset=utf-8',
			entriesToCSV(entries)
		);
	};

	const handleDownloadJSON = () => {
		if (!entries.length) return;
		const clean = entries.map(({ createdAt, ...rest }) => ({
			...rest,
			createdAt: formatDateTime(createdAt.toDate()),
		}));
		downloadString(
			formatFileName('json'),
			'application/json',
			JSON.stringify(clean, null, 2)
		);
	};

	// const handleDelete = async (id: string) => {
	// 	const ok = window.confirm('Delete this entry?');
	// 	if (!ok) return;

	// 	try {
	// 		await deleteDoc(doc(db, 'signup-newsletter', id));
	// 	} catch (err) {
	// 		console.error('Failed to delete:', err);
	// 	}
	// };

	useEffect(() => {
		const queryFirebase = query(
			collection(db, 'signup-newsletter'),
			orderBy('createdAt', 'desc')
		);

		const unsubscribe = onSnapshot(queryFirebase, (snapshot) => {
			const data = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			})) as NewsletterEntry[];

			setEntries(data);
		});

		return () => unsubscribe();
	}, []);

	return (
		<section className='admin'>
			<h1 className='admin__heading'>Landing Page Signups</h1>
			<table className='admin__table'>
				<thead className='admin__table-header'>
					<tr>
						<th>No</th>
						<th>Name</th>
						<th>Country</th>
						<th>Email</th>
						<th>Feedback</th>
						<th>Signed Up At</th>
						{/* <th>Actions</th> */}
					</tr>
				</thead>

				<tbody className='admin__table-body'>
					{entries.map((entry, index) => (
						<tr
							key={entry.id}
							className={
								index % 2 === 0
									? 'admin__table-row even'
									: 'admin__table-row odd'
							}
						>
							<td>{index + 1}</td>
							<td>{entry.name}</td>
							<td>{entry.country}</td>
							<td>{entry.email}</td>
							<td>{entry.feedback ? 'Yes' : 'No'}</td>
							<td>{entry.createdAt?.toDate().toLocaleString()}</td>
							{/* <td>
								<button
									className='button__delete'
									onClick={() => handleDelete(entry.id)}
								>
									Delete
								</button>
							</td> */}
						</tr>
					))}
				</tbody>
			</table>

			<div className='admin__buttons'>
				<button
					className='button__csv'
					onClick={handleDownloadCSV}
					disabled={!entries}
				>
					Download CSV
				</button>

				<button
					className='button__json'
					onClick={handleDownloadJSON}
					disabled={!entries}
				>
					Download JSON
				</button>
			</div>
		</section>
	);
};

export default NewsletterAdmin;
