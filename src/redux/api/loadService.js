import axios from 'axios';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjaGFudElkIjoiMjc1Iiwicm9sZSI6Ik1lcmNoYW50IiwibmJmIjoxNjA0Mzg2NzI2LCJleHAiOjE2Mjg3MjYzODYsImlhdCI6MTYwNDM4NjcyNiwiaXNzIjoiaHR0cDovL2Rldi5oYXJtb255cGF5bWVudC5jb20vYXBpLyJ9.DezF7eWvczwoFMS_XiuPPpk3AlvU44PMhQY1UIE4Qos';
const ULR = 'https://dev.harmonypayment.com/api/category/getbymerchant/275?isSignin=true';
var config = {
    method: 'get',
    url: ULR,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    data: ''
};
const data = () => axios(config).then(res => {
    return res
}).catch(err => {
    return err
});
export default data;