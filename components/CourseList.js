import React, {useState} from 'react';
import CourseSelector from './CourseSelector';
import TermSelector from './TermSelector';
import { ScrollView } from 'react-native';
import * as c from '../utils/course';

const termMapping = {F: 'Fall', W: 'Winter', S:'Spring'};
const terms = Object.values(termMapping);

const CourseList = ({courses, view}) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === c.getCourseTerm(course));

  return(
      <ScrollView>
        <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
        <CourseSelector courses={termCourses} view={view}/>
      </ScrollView>
  );
};

export default CourseList;