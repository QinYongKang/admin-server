import { HttpService } from '@nestjs/axios';
import { FastifyRequest } from 'fastify';
export declare class UtilService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getReqIP(req: FastifyRequest): string;
    IsLAN(ip: string): boolean;
    getLocation(ip: string): Promise<any>;
    aesEncrypt(msg: string, secret: string): string;
    aesDecrypt(encrypted: string, secret: string): string;
    md5(msg: string): string;
    generateUUID(): string;
    generateRandomValue(length: number, placeholder?: string): string;
}
