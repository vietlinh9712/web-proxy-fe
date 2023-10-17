import {Injectable} from "@angular/core";
import {map, Subject} from "rxjs";
import {WebsocketService} from "../ws/ws.service";

const WS_URL = 'ws://34.83.113.8:15001/socket.io';

@Injectable({
    providedIn: 'root'
  })
export class CommonService {
  public messages: Subject<any>;

  constructor(wsService: WebsocketService) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    this.messages = <Subject<any>>wsService.connect(WS_URL).pipe(map(
      (response: MessageEvent): any => {
        const data = JSON.parse(response.data);
        return {
          data
        };
      }
    ));
  }
}
