package org.example.demo2.dbUtils;


import org.example.demo2.beans.AreaCheckerBean;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AvailableSettings;
import org.hibernate.cfg.Configuration;

public class HibernateUtils {
    private static final SessionFactory factory;

    static {
        try {
            Configuration configuration = new Configuration();
            configuration.configure();
            configuration.setProperty(AvailableSettings.USER, "s367561");
            configuration.setProperty(AvailableSettings.PASS, "AYPlcuuadj62xsmk");
            configuration.addAnnotatedClass(AreaCheckerBean.class);
            factory = configuration
                    .buildSessionFactory();
        } catch (Throwable ex) {
            System.err.println("Hibernate is not initialized: " + ex);
            throw new ExceptionInInitializerError();
        }
    }

    public static SessionFactory getFactory() {
        return factory;
    }
}