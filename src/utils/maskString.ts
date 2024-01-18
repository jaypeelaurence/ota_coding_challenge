interface DECONSTRUCTED_STRING {
  pref: string;
  suff: string;
}

interface EMAIL_ADDRESS extends DECONSTRUCTED_STRING {
  client: string;
}

export async function maskEmailAddress(
  emailAddress: string,
): Promise<EMAIL_ADDRESS> {
  const stripEmailAddress = emailAddress.split('@');

  return {
    pref: stripEmailAddress[0].slice(0, 3),
    suff: stripEmailAddress[0].slice(
      stripEmailAddress[0].length - 3,
      stripEmailAddress[0].length,
    ),
    client: stripEmailAddress[1],
  };
}

export async function maskMobileNumber(
  mobileNumber: string,
): Promise<DECONSTRUCTED_STRING> {
  return await maskString(mobileNumber);
}

export default async function maskString(
  string: string,
  length = 3,
): Promise<DECONSTRUCTED_STRING> {
  const stripString = string.split('');

  return {
    pref: stripString.slice(0, length).join(''),
    suff: stripString
      .slice(stripString.length - length, stripString.length)
      .join(''),
  };
}
