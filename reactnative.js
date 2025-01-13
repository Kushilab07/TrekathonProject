import React, { useState } from 'react';
import { View, Text, Button, Picker, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const screenWidth = Dimensions.get('window').width;

// Attendance Component
const Attendance = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [attendanceStatus, setAttendanceStatus] = useState('Present');
  const [attendanceData, setAttendanceData] = useState({ Present: 0, Absent: 0 });

  const submitAttendance = () => {
    const newAttendanceData = { ...attendanceData };
    newAttendanceData[attendanceStatus]++;
    setAttendanceData(newAttendanceData);
  };

  const chartData = [
    { name: 'Present', population: attendanceData.Present, color: '#36a2eb', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Absent', population: attendanceData.Absent, color: '#ff6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance</Text>
      <TextInput
        style={styles.input}
        placeholder="Employee Name"
        value={employeeName}
        onChangeText={setEmployeeName}
      />
      <Picker selectedValue={attendanceStatus} style={styles.picker} onValueChange={setAttendanceStatus}>
        <Picker.Item label="Present" value="Present" />
        <Picker.Item label="Absent" value="Absent" />
      </Picker>
      <Button title="Submit Attendance" onPress={submitAttendance} />
      
      <PieChart
        data={chartData}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#ffaf00',
          backgroundGradientTo: '#ffcc00',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: { borderRadius: 16 },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
      />
    </View>
  );
};

// Leave Component
const Leave = () => {
  const [leaveStatus, setLeaveStatus] = useState('Approved');
  const [leaveData, setLeaveData] = useState({ Approved: 0, Pending: 0, Denied: 0 });

  const submitLeave = () => {
    const newLeaveData = { ...leaveData };
    newLeaveData[leaveStatus]++;
    setLeaveData(newLeaveData);
  };

  const chartData = [
    { name: 'Approved', population: leaveData.Approved, color: '#36a2eb', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Pending', population: leaveData.Pending, color: '#ffcc00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Denied', population: leaveData.Denied, color: '#ff6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave</Text>
      <Picker selectedValue={leaveStatus} style={styles.picker} onValueChange={setLeaveStatus}>
        <Picker.Item label="Approved" value="Approved" />
        <Picker.Item label="Pending" value="Pending" />
        <Picker.Item label="Denied" value="Denied" />
      </Picker>
      <Button title="Submit Leave" onPress={submitLeave} />
      
      <PieChart
        data={chartData}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#ffaf00',
          backgroundGradientTo: '#ffcc00',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: { borderRadius: 16 },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
      />
    </View>
  );
};

// Payroll Component
const Payroll = () => {
  const [payrollStatus, setPayrollStatus] = useState('Paid');
  const [payrollData, setPayrollData] = useState({ Paid: 0, Pending: 0 });

  const submitPayroll = () => {
    const newPayrollData = { ...payrollData };
    newPayrollData[payrollStatus]++;
    setPayrollData(newPayrollData);
  };

  const chartData = [
    { name: 'Paid', population: payrollData.Paid, color: '#36a2eb', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Pending', population: payrollData.Pending, color: '#ff6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payroll</Text>
      <Picker selectedValue={payrollStatus} style={styles.picker} onValueChange={setPayrollStatus}>
        <Picker.Item label="Paid" value="Paid" />
        <Picker.Item label="Pending" value="Pending" />
      </Picker>
      <Button title="Submit Payroll" onPress={submitPayroll} />
      
      <PieChart
        data={chartData}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#ffaf00',
          backgroundGradientTo: '#ffcc00',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: { borderRadius: 16 },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
      />
    </View>
  );
};

// Travel Component (Template)
const Travel = () => {
  const [travelData, setTravelData] = useState({ Business: 0, Leisure: 0 });

  const submitTravel = (status) => {
    const newTravelData = { ...travelData };
    newTravelData[status]++;
    setTravelData(newTravelData);
  };

  const chartData = [
    { name: 'Business', population: travelData.Business, color: '#36a2eb', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Leisure', population: travelData.Leisure, color: '#ff6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel</Text>
      <Button title="Add Business Travel" onPress={() => submitTravel('Business')} />
      <Button title="Add Leisure Travel" onPress={() => submitTravel('Leisure')} />
      
      <PieChart
        data={chartData}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#ffaf00',
          backgroundGradientTo: '#ffcc00',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: { borderRadius: 16 },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
      />
    </View>
  );
};

// Expenses Component (Template)
const Expenses = () => {
  const [expensesData, setExpensesData] = useState({ Approved: 0, Pending: 0, Denied: 0 });

  const submitExpenses = (status) => {
    const newExpensesData = { ...expensesData };
    newExpensesData[status]++;
    setExpensesData(newExpensesData);
  };

  const chartData = [
    { name: 'Approved', population: expensesData.Approved, color: '#36a2eb', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Pending', population: expensesData.Pending, color: '#ffcc00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Denied', population: expensesData.Denied, color: '#ff6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses</Text>
      <Button title="Add Approved Expense" onPress={() => submitExpenses('Approved')} />
      <Button title="Add Pending Expense" onPress={() => submitExpenses('Pending')} />
      <Button title="Add Denied Expense" onPress={() => submitExpenses('Denied')} />
      
      <PieChart
        data={chartData}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#ffaf00',
          backgroundGradientTo: '#ffcc00',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: { borderRadius: 16 },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
      />
    </View>
  );
};

// App Component (Navigation Setup)
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Attendance">
        <Stack.Screen name="Attendance" component={Attendance} />
        <Stack.Screen name="Leave" component={Leave} />
        <Stack.Screen name="Payroll" component={Payroll} />
        <Stack.Screen name="Travel" component={Travel} />
        <Stack.Screen name="Expenses" component={Expenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  picker: {
    width: '100%',
    marginBottom: 20,
  },
});

export default App;
