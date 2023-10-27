export interface EventObject {
  componentKey: string;
  selector: string;
  action: string;
  handler: (args: any) => void;
}
