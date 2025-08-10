export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    console.log(res);
    const data = Object.fromEntries(res);
    return null;
  } catch (error) {
    console.log(error);
  }
};
