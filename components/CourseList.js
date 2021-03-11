import React, {useState} from 'react';
import CourseSelector from './CourseSelector';
import TermSelector from './TermSelector';
import { StyleSheet, ScrollView } from 'react-native';
import * as c from 'C:/Users/User/Desktop/HelloWorld/utils/course';

const termMapping = {F: 'Fall', W: 'Winter', S:'Spring'};
const terms = Object.values(termMapping);

const CourseList = ({courses}) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === c.getCourseTerm(course));

  return(
      <ScrollView>
        <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
        <CourseSelector courses={termCourses}/>
      </ScrollView>
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