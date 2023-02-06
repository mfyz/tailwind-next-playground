import Head from 'next/head'
import {
	ResponsiveContainer, Tooltip, Legend,
	BarChart, Bar, CartesianGrid, XAxis, YAxis,
	PieChart, Pie, Cell
} from 'recharts'

const data = [
	{ name: 'Page A', uv: 4000, br: 400 },
	{ name: 'Page B', uv: 3000, br: 300 },
	{ name: 'Page C', uv: 2000, br: 200 },
	{ name: 'Page D', uv: 2780, br: 278 },
	{ name: 'Page E', uv: 1890, br: 189 },
	{ name: 'Page F', uv: 2390, br: 239 },
	{ name: 'Page G', uv: 3490, br: 349 }
];

const dataPie = [
	{ name: 'Group A', value: 400 },
	{ name: 'Group B', value: 300 },
	{ name: 'Group C', value: 300 },
	{ name: 'Group D', value: 200 },
];
const colorsPie = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);
	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

export default function Charts() {
	return (
		<div>
			<Head>
				<title>Tailwind CSS Test</title>
			</Head>
			<main>
				<h2 className="mb-6">Bar Chart:</h2>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart
						margin={10}
						data={data}
						barSize={50}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip cursor={false} animationDuration={0} />
						<Legend />
						<Bar dataKey="uv" stackId="1" fill="#8884d8" />
						<Bar dataKey="br" stackId="1" fill="#00f" />
					</BarChart>
				</ResponsiveContainer>

				<h2 className="mb-6">Pie Chart:</h2>
				<ResponsiveContainer width="100%" height={300}>
					<PieChart width={400} height={400}>
						<Pie
							data={dataPie}
							cx="50%"
							cy="50%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={80}
							fill="#8884d8"
							dataKey="value"
						>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={colorsPie[index % colorsPie.length]} />
							))}
						</Pie>
						<Tooltip />
					</PieChart>
				</ResponsiveContainer>
			</main>
		</div>
	)
}
