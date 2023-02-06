import Head from 'next/head'
import { H1 } from '../components/headings'

const SectionTitle = ({ children }) => <H1 className="mt-16">{children}</H1>

export default function Home() {
	return (
		<div>
			<Head>
				<title>Tailwind CSS Test</title>
			</Head>
			<main>
				<SectionTitle>Hello There4!</SectionTitle>
				<p>
				Proident dolor ea ea veniam proident ea tempor ipsum anim adipisicing ea deserunt ad.
				Adipisicing aliqua deserunt officia ea esse occaecat exercitation.
				Nisi ad non laboris ad eiusmod irure velit dolore aliqua.
				Sit sint est velit qui culpa cillum incididunt et proident.
				Non aliqua voluptate ex ipsum sunt in ex cupidatat fugiat deserunt esse.
				</p>

				<SectionTitle>Boxes / Cards</SectionTitle>
				<div className="p-6 max-w-sm bg-white rounded-xl shadow-md flex items-center space-x-4">
					<div>
						<div className="text-xl font-medium text-black">ChitChat</div>
						<p className="text-gray-500">You have a new message!</p>
					</div>
				</div>
				{/* Card 2 */}
				<div className="max-w-2xl w-full lg:flex mt-8">
					<div
						className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
						style={{ backgroundImage: "url('https://tailwindcss.com/img/card-left.jpg')" }}
						title="Woman holding a mug"
					/>
					<div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
						<div className="mb-8">
							<p className="text-sm text-grey-dark flex items-center">
								<svg className="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
								</svg>
								Members only
							</p>
							<div className="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
							<p className="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
						</div>
						<div className="flex items-center">
							<img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink" />
							<div className="text-sm">
								<p className="text-black leading-none">Jonathan Reinink</p>
								<p className="text-grey-dark">Aug 18</p>
							</div>
						</div>
					</div>
				</div>

				<SectionTitle>Alerts</SectionTitle>
				<div className="bg-green-300 border-t-4 border-green-600 rounded-b text-white-900 px-6 py-6 shadow-md my-2" role="alert">
					<div className="flex">
						<svg className="h-6 w-6 text-teal mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
						<div>
							<p className="font-bold">Our privacy policy has changed</p>
							<p className="text-sm">Make sure you know how these changes affect you.</p>
						</div>
					</div>
				</div>

				<div className="p-2">
					<div className="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
						<span className="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center">Indigo</span>
						<span className="inline-flex px-2">Praesent ex nibh, laoreet id luctus vitae, porttitor at turpis. </span>
					</div>
				</div>

				<SectionTitle>Buttons</SectionTitle>
				<div className="grid grid-cols-6 gap-4">
					<button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
						Click me
					</button>
					<button className="border-2 border-yellow-600 rounded-lg px-3 py-2 text-yellow-400 cursor-pointer hover:bg-yellow-600 hover:text-yellow-200">
						Orange Button
					</button>
					<button className="border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200">
						Blue Button
					</button>
					<button className="border-2 border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200">
						Green Button
					</button>
					<button className="border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200">
						Purple Button
					</button>
					<button className="border-2 border-red-600 rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-red-600 hover:text-red-200">
						Red Button
					</button>
					<button className="border-2 border-gray-800 rounded-lg px-3 py-2 text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200">
						Dark Button
					</button>
				</div>

				<SectionTitle>Modal</SectionTitle>
				<div className="flex justify-center py-24 items-center bg-gray-200 antialiased">
					<div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
						<div
							className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
						>
							<p className="font-semibold text-gray-800">Add a step</p>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</div>
						<div className="flex flex-col px-6 py-5 bg-gray-50">
							<p className="mb-2 font-semibold text-gray-700">Bots Message</p>
							<textarea
								type="text"
								name=""
								placeholder="Type message..."
								className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
								id=""
							></textarea>
							<div className="flex items-center mt-5 mb-3 space-x-4">
								<input
									className="inline-flex rounded-full"
									type="checkbox"
									id="check1"
									name="check1"
								/>
								<label className="inline-flex font-semibold text-gray-400" for="check1">Add a crew</label>
							</div>
						</div>
						<div
							className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
						>
							<p className="font-semibold text-gray-600">Cancel</p>
							<button className="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
								Save
							</button>
						</div>
					</div>
				</div>

				<SectionTitle>Table</SectionTitle>			
				<div className="flex items-center px-4 bg-gray-200 py-24">
					<div className='overflow-x-auto w-full'>
						<table className='mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
							<thead className="bg-gray-50">
								<tr className="text-gray-600 text-left">
									<th className="font-semibold text-sm uppercase px-6 py-4">
										Name
									</th>
									<th className="font-semibold text-sm uppercase px-6 py-4">
										Title
									</th>
									<th className="font-semibold text-sm uppercase px-6 py-4 text-center">
										status
									</th>
									<th className="font-semibold text-sm uppercase px-6 py-4 text-center">
										role
									</th>
									<th className="font-semibold text-sm uppercase px-6 py-4">
										
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								<tr>
									<td className="px-6 py-4">
										<div className="flex items-center space-x-3">
											<div className="inline-flex w-10 h-10">
												<img className='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />
											</div>
											<div>
												<p className="">
													Jane Doe
												</p>
												<p className="text-gray-500 text-sm font-semibold tracking-wide">
													jane20doe@mail.com
												</p>
											</div>
										</div>
									</td>
									<td className="px-6 py-4">
										<p className="">
											Patwari at Betul
										</p>
										<p className="text-gray-500 text-sm font-semibold tracking-wide">
											Management
										</p>
									</td>
									<td className="px-6 py-4 text-center">
										<span className="text-green-800 bg-green-200 font-semibold px-2 rounded-full">
											Active
										</span>
									</td>
									<td className="px-6 py-4 text-center">
										Admin
									</td>
									<td className="px-6 py-4 text-center">
										<a href="#" className="text-purple-800 hover:underline">Edit</a>
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4">
										<div className="flex items-center space-x-3">
											<div className="inline-flex w-10 h-10">
												<img className='w-10 h-10 object-cover rounded-full' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />
											</div>
											<div>
												<p className="">
													Jane Doe
												</p>
												<p className="text-gray-500 text-sm font-semibold tracking-wide">
													jane20doe@mail.com
												</p>
											</div>
										</div>
									</td>
									<td className="px-6 py-4">
										<p className="">
											Patwari at Betul
										</p>
										<p className="text-gray-500 text-sm font-semibold tracking-wide">
											Management
										</p>
									</td>
									<td className="px-6 py-4 text-center">
										<span className="text-green-800 bg-green-200 font-semibold px-2 rounded-full">
											Active
										</span>
									</td>
									<td className="px-6 py-4 text-center">
										Admin
									</td>
									<td className="px-6 py-4 text-center">
										<a href="#" className="text-purple-800 hover:underline">Edit</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</main>
		</div>
	)
}
