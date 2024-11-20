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
                <H5 style={{ textAlign: 'center', marginTop: 0 }}>TBA KEY INPUT</H5>
                <TBAKey size="$4" />            
                </YStack>
            </XStack>
        </ScrollView>
    </View>
  )
}

function TBAKey(props: { size: SizeTokens }) {
    return (
      <XStack alignItems="center" space="$2">
        <Input flex={1} size={props.size} placeholder={`TBA KEY`} />
        <Button size={props.size} onPress={() => Keyboard.dismiss()}>Go</Button>
      </XStack>
    )
  }
