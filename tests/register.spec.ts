import { test, expect } from '@playwright/test';

test('Debe registrar un usuario exitosamente', async ({ page }) => {
  // 1. Navegar a la aplicación (en el contenedor Docker)
  await page.goto('http://localhost:8081');

  // 2. Verificar que cargó correctamente (título)
  await expect(page).toHaveTitle(/User Registration/);

  // 3. Llenar el formulario usando los IDs identificados
  await page.fill('#fullName', 'Marcelo Torres');
  await page.fill('#email', 'marcelo@example.com');
  await page.fill('#password', 'SecurePass123!');

  // 3.1 Aceptar Términos y Condiciones (requerido para éxito)
  await page.check('#terms');

  // 4. Hacer clic en el botón de registro (buscado por rol)
  await page.getByRole('button', { name: 'Create Account' }).click();

  // 5. Verificar el mensaje de éxito
  const successMessage = page.locator('#success-message');
  await expect(successMessage).toBeVisible({ timeout: 5000 });
  await expect(successMessage).toHaveText(/Registration Successful!/);
});
