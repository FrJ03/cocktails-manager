import { describe, it, expect } from "vitest";
import StepOrder from "../step-order.entity";

describe('step order entity test', () => {
    it('constructor test', () => {
        const order = 5

        const stepOrder = new StepOrder(order)

        expect(stepOrder.order).toBe(order)
    })
    describe('create test', () => {
        it('valid order', () => {
            const order = 5
    
            const stepOrder = StepOrder.create(order)
            
            expect(stepOrder).not.toBeUndefined()
            if(stepOrder !== undefined){
                expect(stepOrder.order).toBe(order)
            }
        })
        it('float order', () => {
            const order = 5.3
    
            const stepOrder = StepOrder.create(order)
            
            expect(stepOrder).toBeUndefined()
        })
        it('negative order', () => {
            const order = -5
    
            const stepOrder = StepOrder.create(order)
            
            expect(stepOrder).toBeUndefined()
        })
        it('zero order', () => {
            const order = 0
    
            const stepOrder = StepOrder.create(order)
            
            expect(stepOrder).toBeUndefined()
        })
    })
})