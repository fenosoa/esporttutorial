describe('Example', () => {
  beforeAll(async () => {
    console.log("Attempting to launch app...");
    const startTime = Date.now();
    await device.launchApp({newInstance: true});
    const endTime = Date.now();
    console.log(`App launched in ${endTime - startTime} ms`);
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show Hello screen after tapping hello button', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show World screen after tapping world button', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });

  it('should show Goodbye screen after tapping goodbye button', async () => {
    await element(by.id('goodbye_button')).tap();
    await expect(element(by.text('Goodbye, World!!!'))).toBeVisible();
  });
});
