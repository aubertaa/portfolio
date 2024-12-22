import { NewlineToBrPipe } from './newline-to-br.pipe';

describe('NewlineToBrPipe', () => {
  let pipe: NewlineToBrPipe;

  beforeEach(() => {
    pipe = new NewlineToBrPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform newlines to <br> tags', () => {
    const input = 'This is a test.\nThis is a new line.';
    const expected = 'This is a test.<br>This is a new line.';
    expect(pipe.transform(input)).toBe(expected);
  });

  it('should return the same string if no newlines exist', () => {
    const input = 'This is a single line.';
    const expected = 'This is a single line.';
    expect(pipe.transform(input)).toBe(expected);
  });

  it('should return empty string if input is empty', () => {
    const input = '';
    const expected = '';
    expect(pipe.transform(input)).toBe(expected);
  });

});
