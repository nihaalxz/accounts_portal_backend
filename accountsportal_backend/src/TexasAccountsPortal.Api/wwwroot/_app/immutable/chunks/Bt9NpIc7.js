//#region src/lib/utils/idempotency.ts
/**
* Idempotency key management for financial write operations.
*
* Rules (from Phase 2 spec):
* - One key per logical user operation
* - Retries reuse the same key
* - User edits payload after failure → new key must be generated
* - Successful completion → key retired (caller must call retire())
* - New user operation → new key via createOperation()
*/
/**
* Creates a new crypto-random idempotency key.
* Uses `crypto.randomUUID()` — available in all modern browsers and Node.js 15+.
*/
function generateIdempotencyKey() {
	return crypto.randomUUID();
}
/**
* Creates a managed idempotent operation container.
* The key is generated immediately and persists across retries.
*/
function createIdempotentOperation() {
	let _key = generateIdempotencyKey();
	let _retired = false;
	return {
		get key() {
			if (_retired) {
				_key = generateIdempotencyKey();
				_retired = false;
			}
			return _key;
		},
		regenerate() {
			_key = generateIdempotencyKey();
			_retired = false;
		},
		retire() {
			_retired = true;
		},
		get isRetired() {
			return _retired;
		}
	};
}
//#endregion
export { createIdempotentOperation as t };
