export function getEnvVarAsString(
    key: keyof NodeJS.ProcessEnv,
): string {
    const value = process.env[key];

    if (value === undefined) {
        const message = `The environment variable "${key}" cannot be "undefined".`;
        throw new Error(message);
    }
    return value;
}

export function getEnvVarAsNumber(
    key: keyof NodeJS.ProcessEnv,
): number {
    const stringValue = getEnvVarAsString(key);

    const numberValue = parseFloat(stringValue);

    if (Number.isNaN(numberValue)) {
        const message = `The environment variable "${key}" has to hold a stringified number value - not ${stringValue}`;

        throw new Error(message);
    }

    return numberValue;
}

export function getEnvVarAsInteger(
    key: keyof NodeJS.ProcessEnv,
): number {
    const stringValue = getEnvVarAsString(key);

    const numberValue = parseInt(stringValue, 10);

    if (Number.isNaN(numberValue)) {
        const message = `The environment variable "${key}" has to hold a stringified integer value - not ${stringValue}`;

        throw new Error(message);
    }

    return numberValue;
}

export function extractBooleanEnvVar(
    key: keyof NodeJS.ProcessEnv,
): boolean {
    const value = getEnvVarAsInteger(key);

    return Boolean(value);
}
