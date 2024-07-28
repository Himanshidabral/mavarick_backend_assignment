class AuthHelper {



 /**
     * Generate One Time Password
     * @param length length of the otp
     * @param expiresIn minutes to expire otp
     * @returns otp
     * @returns expiresIn
     * @returns An otp of given length and expire time 
     */
   public async otpGenerator(length: number, expiresIn: number): Promise<{otp: string,expiresIn: number}> {
    var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let otp: string = '';
    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    expiresIn = (new Date().getTime()) + (60000 * expiresIn);
    return { otp, expiresIn }
}
}

export default new AuthHelper();
