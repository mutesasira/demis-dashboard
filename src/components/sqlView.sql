select 
    sum(dv.value::INTEGER) total 
from datavalue dv 
inner join dataelement de using(dataelementid) 
inner join organisationunit o on(o.organisationunitid  = dv.sourceid)  

where 
    de.uid = '${dx}' 
    and o.path ~ '${parent}' 
    and dv.deleted = false 
group by per;

and p.startdate between '${startdate}' and '${enddate}'
inner join period p using (periodid)


select split_part(path, '/', ${part}) as ou,sum(dv.value::INTEGER) total from datavalue dv 
inner join dataelement de using(dataelementid) 
inner join organisationunit o on(o.organisationunitid  = dv.sourceid)   
inner join period p using (periodid)
where de.uid = '${dx}' and o.path ~ '${parent}' and dv.deleted = false 
and p.startdate between '${startdate}' and '${enddate}'
group by ou;




--Database level function to query users
CREATE OR REPLACE FUNCTION reporters_at_school_level(startdate TEXT, enddate TEXT) RETURNS BIGINT AS
$delim$
    DECLARE
        retval BIGINT := 0;
    BEGIN
        SELECT
            COUNT(DISTINCT userinfoid) INTO retval
        FROM usermembership u
        INNER JOIN organisationunit o using(organisationunitid)
        INNER JOIN userinfo using(userinfoid)
        WHERE
            o.hierarchylevel = 7
            AND userinfo.created >= startdate::DATE
            AND userinfo.created <= enddate::DATE;
        RETURN retval;
    END;
$delim$ LANGUAGE plpgsql;