import axios from 'axios';
import { timeDto } from '../Dto';
export const test = async (): Promise<timeDto | undefined> => {
    try {
        const resourceName = (window as any).GetParentResourceName ? (window as any).GetParentResourceName() : 'nui';
        const eventName = "GetTime";
        

        const resp = await axios.post<timeDto>(`https://${resourceName}/${eventName}`, {}, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        });

    
        return resp.data;

    } catch (error) {
        console.error('Error in SendUserFinish:', error);
    }
};
