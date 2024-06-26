import { describe, it, expect } from "vitest";
import { StepResponse } from "../../../dto/response/step.response";
import { StepFactory } from "../step.factory";

describe('step factory tests', () => {
    it('valid step', () => {
        const stepData = {
            order: 1,
            description: 'pour 2 ounces of lime juice into the shaker'
        } as StepResponse

        const step = StepFactory.create(stepData)

        expect(step).not.toBeUndefined()
        if(step !== undefined){
            expect(step.order).toBe(stepData.order)
            expect(step.description).toBe(stepData.description)
        }
    })
    it('Invalid order (zero)', () => {
        const stepData = {
            order: 0,
            description: 'pour 2 ounces of lime juice into the shaker'
        } as StepResponse

        const step = StepFactory.create(stepData)

        expect(step).toBeUndefined()
    })
    it('Invalid order (negative)', () => {
        const stepData = {
            order: -1,
            description: 'pour 2 ounces of lime juice into the shaker'
        } as StepResponse

        const step = StepFactory.create(stepData)

        expect(step).toBeUndefined()
    })
    it('Invalid description (two lines)', () => {
        const stepData = {
            order: 0,
            description: 'pour 2 ounces of lime juice into the shaker\npour 2 ounces of lime juice into the shaker'
        } as StepResponse

        const step = StepFactory.create(stepData)

        expect(step).toBeUndefined()
    })
    it('Invalid description (tab)', () => {
        const stepData = {
            order: 0,
            description: '\tpour 2 ounces of lime juice into the shaker'
        } as StepResponse

        const step = StepFactory.create(stepData)

        expect(step).toBeUndefined()
    })
})