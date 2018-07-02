export class DataService {

  private _healthsystem: any;
  private _employee: any;
  private _employeeList  = [];


  public get healthsystem(): any {
    return this._healthsystem;
  }

  public set healthsystem(v: any) {
    this._healthsystem = v;
  }

  public get employee(): any {
    return this._employee;
  }

  public set employee(v: any) {
    this._employee = v;
  }

  public get employeeList(): any {
    return this._employeeList;
  }

  public set employeeList(employee: any) {
    if (employee) {
      this._employeeList.push(employee);
    }
  }
}
