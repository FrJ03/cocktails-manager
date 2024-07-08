import { Button } from "@nextui-org/button";
import { ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Image } from "@nextui-org/image";

interface CocktailDetailsProperties{
	onClose: () => void,
	cocktail: {
		id: string,
		name: string,
		image: string
	}
}

export default function CocktailDetails(props: CocktailDetailsProperties){
    return (
            <div className="flex flex-col justify-between h-full w-full">
				<div className="flex w-full h-1/6 justify-center bg-main-color text-6xl uppercase text-white">
					<div className="flex flex-col justify-center">
						<strong>{props.cocktail.name}</strong>
					</div>
				</div>
				<div className="flex flex-row space-x-12">
					<div className=" h-full rounded outline outline-main-color outline-8 p-4">
						<Image
							radius="lg"
							alt={props.cocktail.name}
							className="size-full object-cover"
							src={props.cocktail.image}
						/>
					</div>
					<div>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nemo illum, natus dignissimos porro veniam aspernatur odio animi facilis similique! Ratione quibusdam recusandae magni amet possimus quasi voluptatem tenetur provident.</p>
					</div>
				</div>
				<div className="flex self-end">
					<button
						className="bg-main-color hover:bg-horved-main-color text-white font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 focus:outline-none"
						onClick={props.onClose}
					>Close</button>
				</div>
            
            </div>
    )
}