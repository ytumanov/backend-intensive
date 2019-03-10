// Core
import request from 'supertest';

// Instruments
import { app } from '../../../server';

let server = request.agent(app);

const checkHeader = (response) => {
    expect(response.header[ 'content-type' ]).toEqual(
        expect.stringContaining('application/json'),
    );
};

describe('classes', () => {
    describe('with no auth', () => {
        test('should return 200 and classes', async (done) => {
            const response = await server.get('/api/classes');
            const { data } = response.body;
            checkHeader(response);

            expect(response.statusCode).toBe(200);
            expect(Array.isArray(data)).toBeTruthy();
            done();
        });
    });

    describe('protected calls', () => {
        beforeAll(async (done) => {
            const email = 'jdoe@email.com';
            const password = 'atata';
            const response = await server.post('/api/auth/login').send({ email, password });

            expect(response.statusCode).toBe(204);

            const cookie = response.headers[ 'set-cookie' ][ 0 ];

            // This is not a documented behavior and should be used carefully
            server.jar.setCookie(cookie);

            done();
        });

        test('should return 200 and data from protected classes post endpoint', async (done) => {
            const response = await server.post('/api/classes').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(Array.isArray(data)).toBeTruthy();
            done();
        });

        test('should return 200 and class by id', async (done) => {
            const response = await server.get('/api/classes/2');
            const { data } = response.body;
            checkHeader(response);

            expect(response.statusCode).toBe(200);
            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 200 and data from protected class id post endpoint', async (done) => {
            const response = await server.post('/api/classes/2').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 200 and data from protected class id put endpoint', async (done) => {
            const response = await server.put('/api/classes/2').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 204 on class id delete endpoint', async (done) => {
            const response = await server.delete('/api/classes/2').send({});
            expect(response.statusCode).toBe(204);
            done();
        });

        test('should return 200 and gradebook', async (done) => {
            const response = await server.get('/api/classes/2/gradebook');
            const { data } = response.body;
            checkHeader(response);

            expect(response.statusCode).toBe(200);
            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 200 and data from protected gradebook post endpoint', async (done) => {
            const response = await server.post('/api/classes/2/gradebook').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 200 and data from protected gradebook put endpoint', async (done) => {
            const response = await server.put('/api/classes/2/gradebook').send({});
            const { data } = response.body;
            expect(response.statusCode).toBe(200);
            checkHeader(response);

            expect(data instanceof Object).toBeTruthy();
            done();
        });

        test('should return 204 on gradebook delete endpoint', async (done) => {
            const response = await server.delete('/api/classes/2/gradebook').send({});
            expect(response.statusCode).toBe(204);
            done();
        });
    });
});
