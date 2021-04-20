import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import Form from '../components/Form';
import { firebase } from '../firebase.js';

const validationSchema = Yup.object().shape({
  id: Yup.string()
    .required()
    .matches(/(F|W|S)\d{3,}/, 'Must be a term and 3-digit number')
    .label('ID'),
  meets: Yup.string()
    .required()
    .matches(/(M|Tu|W|Th|F)+ +\d\d?:\d\d-\d\d?:\d\d/, 'Must be weekdays followed by start and end time')
    .label('Meeting times'),
  title: Yup.string()
    .required()
    .label('Title'),
});

const CourseEditScreen = ({route}) => {
  const course = route.params.course;
  const [submitError, setSubmitError] = useState('');

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const db = firebase.database().ref();
    const handleData = snap => {
    if (snap.val()) setEntries(snap.val()["courses"]);
      else setEntries([]);
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);

  var data = [];
  for (var id in entries) {
    var temp = entries[id];
    temp["firebaseid"] = id;
    data.push(temp);
  }

  async function handleSubmit(values, data) {
  
    const { id, meets, title } = values;

    var firebaseID = id;
    let entry = data.find(e => {
        return e.id === id;
    })

    if(entry) {
      firebaseID = entry["firebaseid"];
    }

    const course = { id, meets, title };
    firebase.database().ref('courses').child(firebaseID).set(course).catch(error => {
      setSubmitError(error.message);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{
            id: course.id,
            meets: course.meets,
            title: course.title
          }}
          validationSchema={validationSchema}
          onSubmit={values => handleSubmit(values, data)}
        >
          <Form.Field
            name="id"
            leftIcon="identifier"
            placeholder=""
            autoCapitalize="none"
            autoFocus={true}
          />
          <Form.Field
            name="meets"
            leftIcon="calendar-range"
            placeholder=""
            autoCapitalize="none"
          />
          <Form.Field
            name="title"
            leftIcon="format-title"
            placeholder=""
          />
          <Form.Button title={'Update'} />
          {<Form.ErrorMessage error={submitError} visible={true} />}
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccccb3'
  }
});

export default CourseEditScreen;