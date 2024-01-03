package org.example.demo2.utils;

public final class AreaChecker {
    public static boolean isHit(double x, double y, double r) {
        if (x >= 0) {
            if (y >= 0) {
                return (x <= r) && (y <= r / 2);
            } else {
                return Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2);
            }
        } else {
            if (y >= 0) {
                return false;
            } else {
                return -(x + y) <= (r / 2);
            }
        }
    }

}
