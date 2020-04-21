import { QueryRunner } from 'typeorm';

export interface KeyManager {
  createSigningKey(id: string, queryRunner?: QueryRunner): Promise<void>;
  readPublicSigningKey(id: string): Promise<string>;
  sign(id: string, data: string): Promise<string>;
  verifySignatureById(id: string, signature: string, data: string): Promise<boolean>;
  verifySignature(signature: string, data: string, publicKey: string): Promise<boolean>;
}
