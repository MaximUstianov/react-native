import React , {useState} from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import {THEME} from '../theme'
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";

export const ToDoScreen = ({ goBack, todo, onRemove }) => {
    const [modal, setModal] = useState(false);
    return (
        <View>
            <EditModal visible={modal} onCancel={() => setModal(false)} value={todo.title}/>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title={'Ред.'} onPress={()=> setModal(true)}/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}><Button title={"Назад"} color={THEME.GREY_COLOR} onPress={goBack}/></View>
                <View style={styles.button}><Button title={"Удалить"} color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)}/></View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '40%',
    },
    title: {
        fontSize: 20,
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
});