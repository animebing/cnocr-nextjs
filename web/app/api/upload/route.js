export async function POST(request) {
  const formData = await request.formData();
  
  // forwarding to ray serve api
  const response = await fetch(process.env.CNOCR_URL, {
    method: 'POST',
    body: formData,
  })
  
  return response;
}
