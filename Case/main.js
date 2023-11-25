// main.js

new Vue({
  el: '#app',
  data() {
    return {
      floors: [1, 2, 3, 4], // 四層樓
      selectedEmployees: {
        1: { 1: '', 2: '', 3: '', 4: '' },
        2: { 1: '', 2: '', 3: '', 4: '' },
        3: { 1: '', 2: '', 3: '', 4: '' },
        4: { 1: '', 2: '', 3: '', 4: '' }
      }, // 跟蹤每個座位的員工選擇
      employees: [
        { id: 'EMP001', color: '#ccc' },
        { id: 'EMP002', color: '#ccc' },
        { id: 'EMP003', color: '#ccc' },
        { id: 'EMP004', color: '#ccc' },
        { id: 'EMP005', color: '#ccc' } // 增加一個新員工
      ]
    };
  },
  methods: {
    assignSeat(floor, seat, employeeId) {
      // 實際指派座位的邏輯
      console.log(`樓層 ${floor} 的座位 ${seat} 被指派給員工 ${employeeId}`);
      
      // 尋找所選擇的員工資料
      const selectedEmployee = this.employees.find(employee => employee.id === employeeId);
      if (selectedEmployee) {
        // 更新座位顏色
        selectedEmployee.color = employeeId ? 'red' : '#ccc';
      }
    },
    availableEmployees(floor, seat) {
      const selectedEmployees = Object.values(this.selectedEmployees).flat(); // 已經選擇的員工
      const selectedEmployeeIds = Object.values(this.selectedEmployees).map(row => row[seat]);
      return this.employees.filter(employee => !selectedEmployeeIds.includes(employee.id));
    },
    getSeatColor(floor, seat) {
      const employeeId = this.selectedEmployees[floor][seat];
      const employee = this.employees.find(emp => emp.id === employeeId);
      return employee ? employee.color : '#ccc';
    }
  }
});
