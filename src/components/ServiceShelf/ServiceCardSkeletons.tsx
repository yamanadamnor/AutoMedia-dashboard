export function ServiceCardSkeletons() {
	return (
		<div className="grid grid-cols-1 gap-6 text-white sm:grid-cols-2 sm:gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3">
			{Array.from({ length: 6 }).map((_, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: Skeletons
				<ServiceCardSkeleton key={index} />
			))}
		</div>
	);
}

function ServiceCardSkeleton() {
	return (
		<div className="flex select-none flex-col items-start justify-between rounded-xl border border-gray-700 bg-service-card px-5 py-2">
			<div className="flex w-full items-center">
				<div className="flex w-full items-center justify-start">
					<div className="mr-4 flex h-7 w-7 animate-pulse rounded-md bg-gray-600 p-0"></div>
					<div className="my-4 h-5 w-40 animate-pulse truncate rounded-md bg-gray-600"></div>
				</div>
			</div>

			<p className="my-3 h-3 w-28 animate-pulse rounded-sm bg-gray-600"></p>
		</div>
	);
}
