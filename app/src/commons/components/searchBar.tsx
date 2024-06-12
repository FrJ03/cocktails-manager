import { Input } from '@nextui-org/input'

export default function SearchBar(){
    return (
        <div className='flex w-fit bg-slate-200 rounded-full p-3 space-x-3'>
            <Input
                label="Search"
                labelPlacement='outside-left'
                isClearable
                radius="lg"
                classNames={{
                    base: [
                        'space-x-3',
                    ],
                    label: "text-black/50",
                    input: [
                        "bg-white",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        'rounded-full',
                        'p-1.5'
                    ],
                }}
            />
            <button
                className="text-white rounded-full bg-main-color hover:bg-horved-main-color font-medium text-sm px-3 py-1 focus:outline-none"
            >Search</button>
        </div>
    );
}