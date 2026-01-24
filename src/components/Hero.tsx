import { motion } from "motion/react";
import { authClient } from "@/lib/auth-client";

const Hero = () => {
	const { data: session } = authClient.useSession();

	const [firstName, lastname] = session?.user?.name?.split(" ") ?? "";

	if (!session) return null;

	return (
		<motion.div
			initial={{
				y: -40,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				duration: 0.5,
			}}
		>
			<div className="w-full hidden lg:block">
				<h1 className="font-light text-xl leading-relaxed">
					Welcome{" "}
					<span className="font-bold italic">{`${firstName} ${lastname}`}</span>
				</h1>
			</div>
		</motion.div>
	);
};

export default Hero;
