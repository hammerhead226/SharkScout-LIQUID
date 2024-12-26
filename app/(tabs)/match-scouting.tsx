import { H4, H5, H6, Circle, Square, Separator, Input, XStack, YStack, Button, View, ScrollView, Select, Label, Adapt, Sheet, useTheme } from 'tamagui'
import type { SizeTokens } from 'tamagui'
import { Keyboard, Platform, Text } from 'react-native'
import { Check, ChevronDown, ChevronUp, X } from '@tamagui/lucide-icons'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'tamagui/linear-gradient'
import { ToggleGroup } from 'tamagui'
import { AlignCenter, AlignLeft, AlignRight } from '@tamagui/lucide-icons'
import { useRouter } from 'expo-router';
import { useStore } from './../../zustand/hooks'


export default function MatchScoutingScreen() {
  const [names, setNames] = useState(['Pranav', 'Reajul', 'Bhavna'])
  const theme = useTheme()

  const { scouter_name, alliance, driver_station, match_number, team_number, set_match_number, set_team_number }: any = useStore()



  const addName = (name: string) => {
    if (name.trim()) {
      setNames([...names, name.trim()])
    }
  }

  useEffect(() => {
    if (Platform.OS === 'ios') {
      console.log('Running on iOS')
      console.log('Names:', names)
    } else {
      console.log('Running on another platform')
    }
  }, [names])

  return (
    <View flex={1} alignItems="center" justifyContent="center" bg="$background">
      <ScrollView>
        <YStack
          width={300}
          minHeight={250}
          overflow="hidden"
          space="$2"
          margin="$3"
          padding="$2"
        >
          {/* <H6 style={{ textAlign: 'center' }}><Text style={{ color: theme.color.val }}>Name Select</Text></H6>
          <NameSelect size="$4" names={names} />
          <AddNameDropdown addName={addName} /> */}
          {/* <Separator marginVertical={10} borderColor="$color" width={'$5'} alignSelf="center"/>  */}
          {/* <H6 style={{ textAlign: 'center' }}><Text style={{ color: theme.color.val }}>Alliance Select</Text></H6> */}
          
          {/* Terminal Information */}
          <YStack bg={alliance === "red" ? "$red3" : "$blue3"} borderRadius="$4" borderStyle="dashed" borderWidth={2} borderColor={alliance === "red" ? "$red10" : "$blue10"} padding="$4" marginBottom="$4">
            <H5 style={{ textAlign: 'center' }} fontWeight="bold">Terminal Information</H5>
            <Separator paddingTop="$2" borderColor="$color" width={'$5'} alignSelf="center"/>


            <YStack paddingTop="$2">
              <XStack justifyContent="space-between">
                <H6 >Scouter Name:</H6>
                <H6 fontWeight="bold">{scouter_name}</H6>
              </XStack>
              <XStack justifyContent="space-between">
                <H6 >Alliance:</H6>
                <H6 fontWeight="bold">{alliance}</H6>
              </XStack>
              <XStack justifyContent="space-between">
                <H6 >Driver Station:</H6>
                <H6 fontWeight="bold">{driver_station}</H6>
              </XStack>
            </YStack>
          </YStack>
          
          {/* Match Num and Team Num */}
          <YStack gap="$2">
            <H5 style={{ textAlign: 'center' }} fontWeight="bold">Match Information</H5>
            <Separator paddingTop="$2" borderColor="$color" width={'$5'} alignSelf="center"/>

            <XStack justifyContent="space-between" alignItems="center">
              <H6>Match Number:</H6>
              <Input
                placeholder=""
                keyboardType="numeric"
                borderColor="$gray9"
                borderWidth={1}
                padding="$2"
                borderRadius="$2"
                width={100}
                value={match_number}
                onChangeText={(text) => set_match_number(text)}
              />
            </XStack>

            <XStack justifyContent="space-between" alignItems="center">
              <H6>Team Number:</H6>
              <Input
                placeholder=""
                keyboardType="numeric"
                borderColor="$gray9"
                borderWidth={1}
                padding="$2"
                borderRadius="$2"
                width={100}
                value={team_number}
                onChangeText={(text) => set_team_number(text)}
              />
            </XStack>

          </YStack>





          {/* <QualNum size="$4" /> */}
          {/* <XStack alignItems="center" justifyContent="center" marginVertical={10}>
            <YStack alignItems="center" space="$6">
              <ToggleGroupComponent type="single" size="$3" orientation="horizontal" />
            </YStack>
          </XStack> */}
          {/* <XStack padding="$2" space="$4" alignItems="center" justifyContent="center">
            <View
              width={220}
              height={40}
              backgroundColor="rgba(106, 13, 173, 0.2)" // Matte purple with 20% opacity
              borderColor="rgba(90, 12, 154, 0.2)" // Slightly darker purple with 20% opacity
              borderWidth={1}
              borderRadius={4}
              alignItems="center"
              justifyContent="center"
            >
              <Text style={{ color: theme.color.val }}>Alliance Set</Text>
            </View>
          </XStack> */}
        </YStack>

        <Separator marginVertical={0} borderColor="$color" width={'$5'} alignSelf="center"/>
        
        <YStack marginTop="$4">
          {scouter_name === '' ? <H6 color={"$red10"}>ERROR: Scouter Name is required</H6> : null}
          {match_number === '' ? <H6 color={"$red10"}>ERROR: Match Number is required</H6> : null}
          {team_number === '' ? <H6 color={"$red10"}>ERROR: Team Number is required</H6> : null}
        </YStack>

        <XStack alignItems="center" justifyContent="center" marginTop="$4">
          <Button color="#FFFFFF" fontWeight="bold" disabled={match_number === '' || team_number === '' || scouter_name === ''} bg={match_number === '' || team_number === '' || scouter_name === '' ? "$gray6" : "$green9"} size="$4" width={200}>
            START 
          </Button>
        </XStack>
      </ScrollView>
    </View>
  )
}

function NameSelect(props: { size: SizeTokens, names: string[] }) {
  const [selectedName, setSelectedName] = useState(props.names[0])
  const theme = useTheme()

  useEffect(() => {
    if (Platform.OS === 'ios') {
      console.log('Names on iOS:', props.names)
    } else {
      console.log('Names on another platform:', props.names)
    }
  }, [props.names])

  return (
    <View alignItems="center">
      <Select value={selectedName} onValueChange={setSelectedName} disablePreventBodyScroll>
        <Select.Trigger width={220} iconAfter={ChevronDown}>
          <Select.Value placeholder="Select Name"><Text style={{ color: theme.color.val }}>{selectedName}</Text></Select.Value>
        </Select.Trigger>

        <Adapt when="sm" platform="touch">
          <Sheet
            dismissOnSnapToBottom
            animationConfig={{
              type: 'spring',
              damping: 20,
              mass: 1.2,
              stiffness: 250,
            }}
          >
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
          </Sheet>
        </Adapt>

        <Select.Content zIndex={200000}>
          <Select.ScrollUpButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3"
          >
            <YStack zIndex={10}>
              <ChevronUp size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={['$background', 'transparent']}
              borderRadius="$4"
            />
          </Select.ScrollUpButton>

          <Select.Viewport minWidth={200}>
            <Select.Group>
              <Select.Label><Text style={{ color: theme.color.val }}>Names</Text></Select.Label>
              {props.names.map((name, i) => (
                <Select.Item key={i} value={name} index={i}>
                  <Select.ItemText><Text style={{ color: theme.color.val }}>{name}</Text></Select.ItemText>
                  <Select.ItemIndicator marginLeft="auto">
                    <Check size={16} />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3"
          >
            <YStack zIndex={10}>
              <ChevronDown size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={['transparent', '$background']}
              borderRadius="$4"
            />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select>
    </View>
  )
}

function QualNum(props: { size: SizeTokens }) {
  const theme = useTheme()
  return (
    <XStack alignItems="center" space="$2">
      <Input flex={1} size={props.size} placeholder={`Qual Number`} />
      <Button size={props.size} onPress={() => Keyboard.dismiss()}><Text style={{ color: theme.color.val }}>Go</Text></Button>
    </XStack>
  )
}

function AddNameDropdown({ addName }: { addName: (name: string) => void }) {
  const [name, setName] = useState('')
  const theme = useTheme()

  const handleAddName = () => {
    addName(name)
    setName('')
  }

  return (
    <View alignItems="center" width="100%">
      <XStack alignItems="center" space="$2" width="100%" paddingHorizontal="$2">
        <Input flex={1} size="$4" placeholder="Add Name" value={name} onChangeText={setName} />
        <Button size="$4" onPress={handleAddName}><Text style={{ color: theme.color.val }}>Add</Text></Button>
      </XStack>
    </View>
  )
}

function ToggleGroupComponent(props: {
  size: SizeTokens
  type: 'single' | 'multiple'
  orientation: 'vertical' | 'horizontal'
}) {
  const id = `switch-${props.size.toString().slice(1)}-${props.type}`
  const theme = useTheme()
  return (
    <YStack alignItems="center" justifyContent="center" space="$4">
      <ToggleGroup
        orientation="horizontal"
        id={id}
        type="single"
        size={props.size}
        disableDeactivation={true}
      >
        <YStack alignItems="center" justifyContent="center" space="$4">
          <XStack
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            space="$4"
          >
            <ToggleGroup.Item value="blue1" aria-label="Blue 1">
              <Text style={{ color: theme.color.val }}>Blue 1</Text>
            </ToggleGroup.Item>
            <ToggleGroup.Item value="blue2" aria-label="Blue 2">
              <Text style={{ color: theme.color.val }}>Blue 2</Text>
            </ToggleGroup.Item>
            <ToggleGroup.Item value="blue3" aria-label="Blue 3">
              <Text style={{ color: theme.color.val }}>Blue 3</Text>
            </ToggleGroup.Item>
          </XStack>

          <XStack
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            space="$4"
          >
            <ToggleGroup.Item value="red1" aria-label="Red 1">
              <Text style={{ color: theme.color.val }}>Red 1</Text>
            </ToggleGroup.Item>
            <ToggleGroup.Item value="red2" aria-label="Red 2">
              <Text style={{ color: theme.color.val }}>Red 2</Text>
            </ToggleGroup.Item>
            <ToggleGroup.Item value="red3" aria-label="Red 3">
              <Text style={{ color: theme.color.val }}>Red 3</Text>
            </ToggleGroup.Item>
          </XStack>
        </YStack>
      </ToggleGroup>
    </YStack>
  )
}