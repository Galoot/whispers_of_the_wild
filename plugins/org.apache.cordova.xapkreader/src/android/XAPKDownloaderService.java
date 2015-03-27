package org.apache.cordova.xapkreader;

import com.google.android.vending.expansion.downloader.impl.DownloaderService;

/**
 * This class demonstrates the minimal client implementation of the
 * DownloaderService from the Downloader library.
 */
public class XAPKDownloaderService extends DownloaderService {

    // stuff for LVL -- MODIFY FOR YOUR APPLICATION!
    private static final String BASE64_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlMU+HNQb5ebIFAvnDgh8gli8/pwbG3XdA5AoHGiDjEGHtb+jwry1G9QcxyNpDm7s9z9s6cyazu21Dn2yZ6kMhFH0kDTMLG3VGmECLE95as8r6k1Y+M7fH1s/OdBn8HAGG/ry3qekqjzAvBoGaNJre4enmFoLBOt1USzm7SfbbLz1ZwXNzUodTtK46MiUjFZBbKdFYWZT3rTmNbrPi4VwoYoh1yqVD5m5KApcX0tp58R2E4Ar3qV05f7K2b9yWG9AC4GKVB0n6Ac0MqP2fnIJO2Qldh+nmcFwpq1/cTsZVlo/oxoKylcXpO48pNS+xfyx343OiXYJe468awRUx715YwIDAQAB";

    // used by the preference obfuscater
    private static final byte[] SALT = new byte[] {
        1, 43, -12, -1, 54, 98, -100, -12, 43, 2, -8, -4, 9, 5, -106, -108, -33, 45, -1, 84
    };

    /**
     * This public key comes from your Android Market publisher account, and it
     * used by the LVL to validate responses from Market on your behalf.
     */
    @Override
    public String getPublicKey() {
        return BASE64_PUBLIC_KEY;
    }

    /**
     * This is used by the preference obfuscater to make sure that your
     * obfuscated preferences are different than the ones used by other
     * applications.
     */
    @Override
    public byte[] getSALT() {
        return SALT;
    }

    /**
     * Fill this in with the class name for your alarm receiver. We do this
     * because receivers must be unique across all of Android (it's a good idea
     * to make sure that your receiver is in your unique package)
     */
    @Override
    public String getAlarmReceiverClassName() {
        return XAPKAlarmReceiver.class.getName();
    }

}