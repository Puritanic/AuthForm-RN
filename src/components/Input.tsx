import React from 'react';
import {
	TextInput, View, Text, StyleSheet, ViewStyle, TextStyle,
} from 'react-native';

interface Props {
	label: string;
	value: string;
	onChange: any;
	placeholder?: string;
	secure?: boolean;
}

interface Style {
	container: ViewStyle;
	input: TextStyle;
	label: TextStyle;
}

const Input = ({
	label, value, onChange, placeholder, secure,
}: Props) => (
	<View style={styles.container}>
		<Text style={styles.label}>{label}</Text>
		<TextInput
			placeholder={placeholder}
			autoCorrect={false}
			value={value}
			style={styles.input}
			onChangeText={onChange}
			secureTextEntry={secure}
		/>
	</View>
);

const styles = StyleSheet.create<Style>({
	container: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	input: {
		color: '#000',
		height: 20,
		width: 100,
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2,
	},
	label: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1,
		color: '#777',
	},
});

export default Input;
