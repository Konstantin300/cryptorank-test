import { useCurrencies } from "../../hooks/useCurrencies";
import { renderHook } from '@testing-library/react-hooks'

describe('useCurrencies', () => {
    beforeAll(() => {
        process.env.API_KEY = "548dd66ab19de7c9ff0ea8cd8a3199543862758a26ec37c421d74172579e";//не нашел тестовый ключ
    });

    afterAll(() => {
        delete process.env.API_KEY;
    });
    it('returns a list of currencies', async () => {
        jest.setTimeout(5000)
        const { result, waitForNextUpdate } = renderHook(() => useCurrencies(2));
        await waitForNextUpdate({timeout: 10000});
        expect(result.current.currencies).toHaveLength(2);
    })
})