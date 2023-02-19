import axios from "axios";
import { getAthData } from "../../helpers/getAthData";

describe('getAthData', () => {
    it('calculates percentage from and to ATH correctly', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: {
          data: {
            price: { USD: 30000 },
            athPrice: { USD: 60000 },
          },
        },
      });
  
      const result = await getAthData();
      
      expect(result?.fromAth).toBe(-50);
      expect(result?.toAth).toBe(100);
    });
  });
  