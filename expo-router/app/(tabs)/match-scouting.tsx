import { H4, H5, Input, XStack, YStack, Button, View, ScrollView, Select, Label } from 'tamagui'
import type { SizeTokens } from 'tamagui'
import { Keyboard } from 'react-native'
import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { LinearGradient } from 'tamagui/linear-gradient'

export default function MatchScoutingScreen() {
  const [names, setNames] = useState(['Pranav', 'Reajul', 'Bhavna'])

  const addName = (name: string) => {
    if (name.trim()) {
      setNames([...names, name.trim()])
    }
  }

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
          <H5 style={{ textAlign: 'center' }}>Name Select</H5>
          <NameSelect size="$4" names={names} />
          <AddNameDropdown addName={addName} />
          <QualNum size="$4" />
        </YStack>
      </ScrollView>
    </View>
  )
}

function NameSelect(props: { size: SizeTokens, names: string[] }) {
  const [selectedName, setSelectedName] = useState(props.names[0])

  return (
    <View alignItems="center">
      <Select value={selectedName} onValueChange={setSelectedName} disablePreventBodyScroll>
        <Select.Trigger width={220} iconAfter={ChevronDown}>
          <Select.Value placeholder="Select Name">{selectedName}</Select.Value>
        </Select.Trigger>

        

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
              <Select.Label>Names</Select.Label>
              {props.names.map((name, i) => (
                <Select.Item key={i} value={name} index={i}>
                  <Select.ItemText>{name}</Select.ItemText>
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
  return (
    <XStack alignItems="center" space="$2">
      <Input flex={1} size={props.size} placeholder={`Qual Number`} />
      <Button size={props.size} onPress={() => Keyboard.dismiss()}>Go</Button>
    </XStack>
  )
}

function AddNameDropdown({ addName }: { addName: (name: string) => void }) {
  const [name, setName] = useState('')

  const handleAddName = () => {
    addName(name)
    setName('')
  }

  return (
    <View alignItems="center">
      <XStack alignItems="center" space="$2">
        <Input flex={1} size="$4" placeholder="Add Name" value={name} onChangeText={setName} />
        <Button size="$4" onPress={handleAddName}>Add</Button>
      </XStack>
    </View>
  )
}