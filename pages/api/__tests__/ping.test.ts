import '@testing-library/jest-dom';
import { createMocks } from 'node-mocks-http';
import handler from '../ping';

describe('/api/ping', () => {
    it('should return successful', () => {
        const { req, res } = createMocks({
            method: 'GET',
        });

        handler(req, res);

        expect(res._getStatusCode()).toEqual(200);
        expect(JSON.parse(res._getData())).toEqual('');
    })
})