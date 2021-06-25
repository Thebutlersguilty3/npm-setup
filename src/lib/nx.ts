import { getInput } from '@actions/core';

export const NX_KEY_INPUT = 'NX_KEY';

export function getNxKey(): string {
  return getInput(NX_KEY_INPUT, { trimWhitespace: true });
}

export function ixNxCached(): boolean {
  return !!getNxKey();
}
