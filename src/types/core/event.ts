export interface EventObject {
  selector: string;
  action: string;
  handler: (args: any) => void;
}
