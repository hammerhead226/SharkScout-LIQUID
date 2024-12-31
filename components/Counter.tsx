import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../utils"
import React from "react"
import { Button, H5, Text, XStack, YStack } from "tamagui"

// ------------------------------------------------------------------------------------------------
// Counter Component Example
// const [test, set_test] = useState(0)
// <Counter value={test} setValue={set_test} label="Test" />
// ------------------------------------------------------------------------------------------------

// Props for the Counter component
// The Counter component extends React.HTMLAttributes<HTMLDivElement> which provides
// all standard HTML div attributes like className, style, onClick, etc.
// This allows the Counter component to accept and pass through any standard div props
interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string // The label for the counter (optional)
    value: number // The current value of the counter
    setValue: (value: number) => void // The function to set the value of the counter
    min?: number // The minimum value for the counter (optional)
    max?: number // The maximum value for the counter (optional)
}

// The Counter component is a forwardRef component that accepts CounterProps
// The ref is used to pass through the ref to the underlying div element, not currently used
// for anything, but it's a good practice to include it as it could be used in the future
const Counter = React.forwardRef<HTMLDivElement, CounterProps>(({ className, value, ...props }, ref) => {
    
    // The handleIncrement function is used to increment the value of the counter
    const handleIncrement = () => {
        if (props.max !== undefined && value >= props.max) return;
        props.setValue(value + 1);
    };

    // The handleDecrement function is used to decrement the value of the counter
    const handleDecrement = () => {
        if (props.min !== undefined && value <= props.min) return;
        props.setValue(value - 1);
    };

    // The return statement is used to render the Counter component
    return (
        <YStack ref={ref}> 
            <H5>{props.label}:</H5>
            <XStack>
                <Button backgroundColor="$red9" onPress={handleDecrement}>
                    <Text color="$gray1" fontWeight="bold" fontSize="$8">-</Text>
                </Button>
                <Text color="$gray10" fontWeight="bold" fontSize="$8" justifyContent="center" alignSelf="center" paddingLeft="$2" paddingRight="$2">{value}</Text>
                <Button backgroundColor="$green9" onPress={handleIncrement}>
                    <Text color="$gray1" fontWeight="bold" fontSize="$8">+</Text>
                </Button>
            </XStack>
        </YStack>
    );
})

Counter.displayName = "Counter"

export default Counter