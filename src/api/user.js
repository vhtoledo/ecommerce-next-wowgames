import { ENV } from "@/utils";

 
 export class User {
    async getMe() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;

            const params = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjgxMDk2MzA1LCJleHAiOjE2ODM2ODgzMDV9.zDph7y3JzM5BVNoYSOQWM_3NQqf89u8T1rxswXXrhKw"
                },
            };

            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 200) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }
 }