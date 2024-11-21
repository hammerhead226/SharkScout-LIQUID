import { H5, Input, XStack, YStack, Button, Separator, Paragraph, View, ScrollView} from 'tamagui'
import type { SizeTokens } from 'tamagui'
import { Keyboard } from 'react-native'

export default function TerminalPanelScreen() {
  return (
    <View flex={1} alignItems="center" justifyContent="center" bg="$background">
        <ScrollView>
            <XStack>
                <YStack
                width={300}
                minHeight={250}
                overflow="hidden"
                space="$2"
                margin="$3"
                padding="$2"
                >
                <H5 style={{ textAlign: 'center', marginTop: 0 }}>PAGE IN PROGRESS</H5>        
                </YStack>
            </XStack>
        </ScrollView>
    </View>
  )
}
