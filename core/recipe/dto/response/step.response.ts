import { DeepReadonly } from "ts-essentials"

type StepResponse = DeepReadonly<{
    order: number,
    description: string
}>

export { StepResponse }