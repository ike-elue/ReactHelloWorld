import React, {useState} from 'react';
import Course from './Course';
import { StyleSheet, View } from 'react-native';
import * as c from '../utils/course';

const CourseSelector = ({courses, view}) => {
    const [selected, setSelected] = useState([]);
    
    const toggle = course => setSelected(selected => (
        selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
    ));

    return (
      <View style={styles.courseList}>
        { 
          courses.map(course => (
            <Course key={course.id} course={course} 
              isDisabled={c.hasConflict(course, selected)}
              select = {toggle}
              isSelected={selected.includes(course)}
              view={view}
            />
          ))
        }
      </View>
    );
  };

  const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    }
  });

  export default CourseSelector;