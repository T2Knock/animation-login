import { Input } from './components/ui/input'
import { Label } from './components/ui/label'

function App() {
	return (
		<div className="flex h-screen w-screen overflow-hidden font-body">
			<div className="flex h-full w-full items-center justify-center">
				<div className="flex w-full flex-col items-center gap-6">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="fullname">Full Name</Label>
						<Input
							type="fullname"
							id="fullname"
							placeholder="John Doe"
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="email">Email</Label>
						<Input
							type="email"
							id="email"
							placeholder="Email Address"
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							id="password"
							placeholder="Password"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
