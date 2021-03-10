import React, {useState} from 'react';
import Course from './Course';
import TermSelector from './TermSelector';
import { StyleSheet, View, ScrollView } from 'react-native';

const termMapping = {F: 'Fall', W: 'Winter', S:'Spring'};
const terms = Object.values(termMapping);

const getCourseTerm = course => (
  termMapping[course.id.charAt(0)]
);

const CourseList = ({courses}) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

  return(
    <View>
      <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
      <ScrollView>
        <View style={styles.courseList}>
          {termCourses.map(course => <Course key={course.id} course={course} />)}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
  });
export default CourseList;